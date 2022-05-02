export interface TextMixinProps {
  weight?: 300 | 400 | 500 | 600;
  size?: 'main' | 'sub' | 'small' | 'smaller';
}

export const textMixin = ({ weight = 400, size = 'main' }: TextMixinProps) => ({
  fontWeight: weight,
  fontSize: `var(--font-size-${size})`,
});
