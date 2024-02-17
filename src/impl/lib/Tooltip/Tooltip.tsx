import type { Placement } from '@floating-ui/react';
import {
    arrow,
    autoUpdate,
    flip,
    FloatingArrow,
    FloatingPortal,
    offset,
    shift,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useMergeRefs,
    useRole,
    useTransitionStyles,
} from '@floating-ui/react';
import classNames from 'classnames';
import * as React from 'react';

import styles from './tooltip.module.scss';

/*
*   Derived (mostly) from 
*   [Floating UI example](https://codesandbox.io/p/sandbox/xenodochial-grass-js3bo9?file=%2Fsrc%2FTooltip.tsx%3A38%2C10)
*   with the inclusion of <FloatingArrow /> and useTransitionStyles()
*/

interface TooltipOptions {
	initialOpen?: boolean;
	placement?: Placement;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function useTooltip({
	initialOpen = false,
	placement = 'top',
	open: controlledOpen,
	onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
	const arrowRef = React.useRef(null);

	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(5),
			flip({
				crossAxis: placement.includes('-'),
				fallbackAxisSideDirection: 'start',
				padding: 5,
			}),
			shift({padding: 5}),
			arrow({element: arrowRef}),
		],
	});

	const context = data.context;

	const hover = useHover(context, {
		move: false,
		enabled: controlledOpen == null,
	});
	const focus = useFocus(context, {
		enabled: controlledOpen == null,
	});
	const dismiss = useDismiss(context);
	const role = useRole(context, {role: 'tooltip'});

	const interactions = useInteractions([hover, focus, dismiss, role]);

	return React.useMemo(
		() => ({
			arrowRef,
			open,
			setOpen,
			...interactions,
			...data,
		}),
		[open, setOpen, interactions, data],
	);
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipContext: () => NonNullable<ContextType> = () => {
	const context = React.useContext(TooltipContext);

	if (context == null) {
		throw new Error('Tooltip components must be wrapped in <Tooltip />');
	}

	return context;
};

export function Tooltip({
	children,
	...options
}: {children: React.ReactNode} & TooltipOptions) {
	// This can accept any props as options, e.g. `placement`,
	// or other positioning options.
	const tooltip = useTooltip(options);
	return (
		<TooltipContext.Provider value={tooltip}>
			{children}
		</TooltipContext.Provider>
	);
}

export const TooltipTrigger = React.forwardRef<
	HTMLElement,
	React.HTMLProps<HTMLElement> & {asChild?: boolean}
>(function TooltipTrigger({children, asChild = false, ...props}, propRef) {
	const context = useTooltipContext();
	const childrenRef = (children as any).ref;
	const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

	// `asChild` allows the user to pass any element as the anchor
	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(
			children,
			context.getReferenceProps({
				ref,
				...props,
				...children.props,
				'data-state': context.open ? 'open' : 'closed',
			}),
		);
	}

	return (
		<button
			ref={ref}
			// The user can style the trigger based on the state
			data-state={context.open ? 'open' : 'closed'}
			{...context.getReferenceProps(props)}>
			{children}
		</button>
	);
});

export const TooltipContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>(function TooltipContent({style, ...props}, propRef) {
	const context = useTooltipContext();
	const ref = useMergeRefs([context.refs.setFloating, propRef]);
	const {isMounted, styles: transitionStyles} = useTransitionStyles(
		context.context,
	);

	if (!isMounted) {
		return null;
	}

	const {className, children, ...other} = props;

	return (
		<FloatingPortal>
			<div
				className={classNames(styles.tooltip, styles.show)}
				ref={ref}
				style={{
					...context.floatingStyles,
					...style,
					...transitionStyles,
				}}
				{...context.getFloatingProps(other)}>
				<FloatingArrow
                    className={styles.arrow}
					context={context.context}
                    ref={context.arrowRef}
				/>
                {children}
			</div>
		</FloatingPortal>
	);
});
