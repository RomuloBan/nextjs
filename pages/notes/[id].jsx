/** @jsx jsx */ /** @jsxRuntime classic */ 
import { jsx } from 'theme-ui'

const NotePage = ({note}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export default NotePage;

export async function getServerSideProps({req, res, params}) {
    const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)
    if (!response.ok) {
        res.setHeader('Location', '/notes')
        res.statusCode = 302
        res.end();
        return {
            props: {}
        }
    }

    const {data} = await response.json();
    if (data) {
        return {
            props: {note: data}
        }
    }

}
