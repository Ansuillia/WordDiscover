import type { EnumStatus } from '@/types/enums/EnumStatus'

export interface AttemptResult {
  word: string
  result: [
    {
      position: number
      status: EnumStatus
    } | null
  ]
}
