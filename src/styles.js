import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	 container: {
		marginTop: '20px',
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(0, 0, 0)
	 }, 
	 icon: {
		marginRight: '20px'

	 }, 
	 buttons: {
		marginTop: '40px'

	 },
	 cardGrid: {
		padding: '20px 0'
	 },
	 card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	 },
	 cardMedia: {
		paddingTop: '56.25%'
	 },
	 cardContent: {
		flexGrow: 1,
	 },
	 footer: {
		backgroundColor: theme.palette.background.paper
	 }
}))

export default useStyles