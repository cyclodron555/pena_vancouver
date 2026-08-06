'use client'

export function PayPalForm() {
  const handlePayPalClick = () => {
    // Create a form dynamically to avoid Next.js routing interception
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://www.paypal.com/cgi-bin/webscr'
    form.target = '_top'

    const cmdInput = document.createElement('input')
    cmdInput.type = 'hidden'
    cmdInput.name = 'cmd'
    cmdInput.value = '_s-xclick'

    const buttonIdInput = document.createElement('input')
    buttonIdInput.type = 'hidden'
    buttonIdInput.name = 'hosted_button_id'
    buttonIdInput.value = 'XLD2HWEMPQEGE'

    const currencyInput = document.createElement('input')
    currencyInput.type = 'hidden'
    currencyInput.name = 'currency_code'
    currencyInput.value = 'CAD'

    form.appendChild(cmdInput)
    form.appendChild(buttonIdInput)
    form.appendChild(currencyInput)
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <button 
      onClick={handlePayPalClick}
      className="bg-brand-gold hover:bg-opacity-90 text-brand-navy font-semibold py-3 px-8 rounded-lg text-lg transition-all"
    >
      Subscribe with PayPal Now
    </button>
  )
}
