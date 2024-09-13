// format number to thai style
const NUMBER_FORMATTER = new Intl.NumberFormat('th-TH')

export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number)
}

// format money
const CURRENT_FORMATTER = new Intl.NumberFormat('th-TH', {
    currency: 'THB',
    style: 'currency',
    minimumFractionDigits: 0
})

export function formatCurrency(amount: number) {
    return CURRENT_FORMATTER.format(amount)
}