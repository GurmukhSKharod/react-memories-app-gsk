import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: '#330033',
        fontWeight: 'thin',
        fontSize: '4em',
        padding: '0px 10px 0px 10px'
      },
      image: {
        marginLeft: '15px',
      },
      /* styles for small devices only, include theme as params*/
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse",
          justifyContent:'center', 
          alignItems:'center'
        },  
        heading: {
          fontSize: '2em',
        },
        image: {
          display: 'none',
        }
      }

}));