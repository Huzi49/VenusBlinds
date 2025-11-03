import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to the default city (Houston)
  redirect('/houston')
}