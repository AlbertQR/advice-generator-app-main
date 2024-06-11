export interface AdviceModel {
  slip: Slip
}

interface Slip {
  id: number
  advice: string
}

export const EmptyAdvice = {
  slip: {
    id: 0,
    advice: ''
  }
}
