import Nav from "@/components/Nav/Nav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className='darkMode'>
      <Nav parent={{
				label: 'Projects',
				path: '/projects',
			}}  />
      {children}
      <Nav parent={{
				label: 'Projects',
				path: '/projects',
			}}  />
    </article>
  )
}