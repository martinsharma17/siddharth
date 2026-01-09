import { AccountOpeningForm } from './components/forms/AccountOpeningForm'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <AccountOpeningForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
