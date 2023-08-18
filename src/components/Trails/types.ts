export type LabelSelected = 'MERCADO' | 'GESTAO' | 'TECNOLOGIA' | 'ESG' | 'STARTUP' | 'FUTURO' | 'DEFAULT'

export type WidthsSizes = LabelSelected;

export type RadioButtonVariants = LabelSelected;

export type StyleProps = {
  sizes?: string;
  colors?: string;
  labelSelected: string;
}