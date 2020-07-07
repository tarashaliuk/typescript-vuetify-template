export const required = (value: any) =>
  !!value || 'Required.'

export const maxCount = (value: string, count: number) =>
  value.length <= count || `Max ${count} characters`
