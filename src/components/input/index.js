import { h } from 'preact';
import { className } from 'components/helpers';
import style from './style';

const Input = ({ children, disabled, error, danger, stack, small, ...args }) => (
	<input {...args} disabled={disabled} className={className(style, 'input', {
		disabled,
		error,
		danger,
		stack,
		small,
	})}
	>{children}</input>
);

export default Input;

export const Select = ({ children, disabled, error, danger, stack, small, ...args }) => (
	<input {...args} disabled={disabled} className={className(style, 'input', {
		disabled,
		error,
		danger,
		stack,
		small,
	})}
	>{children}</input>
);

const preventDefault = (e) => e.preventDefault();

export const Form = ({ children, ...args }) => <form onSubmit={preventDefault} {...args}> {children} </form>;

export const Label = ({ children, error }) => (
	<label
		className={className(style, 'label', {
			error,
		})}
	>
		{children}
	</label>
);

export const Description = ({ children }) => <small className={style.description}>{children}</small>;

export const Error = ({ children }) => (
	<small
		className={className(style, 'description', {
			error: true,
		})}
	>
		{children}
	</small>
);

export const Item = ({ children, inline }) => (
	<div
		className={className(style, 'formGroup', { inline })}
	>
		{children}
	</div>);
