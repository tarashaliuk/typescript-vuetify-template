import IMenuItem from '@/types/IMenuItem';

export default interface ISubMenuItem {
  model: boolean,
  icon: string,
  text: string,
  'icon-alt'?: string
  children: IMenuItem[]
}
