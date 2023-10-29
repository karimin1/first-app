let dat=new Date()
let year=dat.getHours()
function Footer(){
    return(
        <div className='footer'><p>copy right@{year}</p></div>
    )
}
export default Footer