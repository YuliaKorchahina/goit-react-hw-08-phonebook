import BackHandIcon from '@mui/icons-material/BackHand';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   },
  title: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: 'center',
  },

};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your space!
       <BackHandIcon  />
      </h1>
    </div>
    
  );
}
