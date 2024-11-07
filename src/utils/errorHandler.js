import { toast } from 'vue3-toastify'

export const handleErrorResponse = (error, defaultMessage = 'Erro ao processar a requisição') => {
  const errors = error?.response?.data
  let errorMessage = defaultMessage + ': '

  const processErrors = (errorObj) => {
    let message = ''
    for (const [field, messages] of Object.entries(errorObj)) {
      if (Array.isArray(messages)) {
        message += `${field}: ${messages.join(', ')}\n`
      } else if (typeof messages === 'object') {
        message += processErrors(messages)
      }
    }
    return message
  }

  errorMessage += errors ? processErrors(errors) : 'Erro desconhecido.'
  toast.error(errorMessage)
}
