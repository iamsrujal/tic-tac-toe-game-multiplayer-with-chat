function index({ data }) {
  return (
    <></>
  )
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  const data = ['zerk', 'shaban']

  // Pass data to the home via props
  return { props: { data } }
}

export default index