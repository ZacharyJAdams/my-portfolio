import Box from '@mui/material/Box'

function About() {
  return (
    <div>      
      <Box sx={{ mt: 10 }}>
        {[...new Array(80)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Box>
  </div>
  )
}

export default About