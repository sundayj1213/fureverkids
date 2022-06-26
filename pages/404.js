import { getCategories } from "../utils/wordpress"

export default function FourOhFour() {
  return <div className='bg-white min-vh-100 d-flex justify-content-center align-items-center '>
    <div className='d-flex justify-content-center align-items-center'>
      <h1 style={{
        borderRight: '1px solid rgba(0, 0, 0,.3)',
        padding: '10px',
        fontSize: '24px'
      }}>404</h1>
      <h2 style={{
        fontSize: '14px',
        fontWeight: 'normal',
        padding: '10px',
      }}>
        Nothing to display
      </h2>
    </div>
  </div>
}

export async function getStaticProps({params }) {
  return {
    props: { 
       categories: await getCategories()
    },
    revalidate: 10
  }

}