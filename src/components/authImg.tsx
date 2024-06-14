import AuthPageImg from "../assets/auth-page.png"
import PlayStorePng from "../assets/google_play.png"
import AppStorePng from "../assets/appstore.png"
function AuthImg() {
  return (
        <>
                <img width="300" src={AuthPageImg} alt="auth page side image" />
        <div className="text">
          <h2 className="whitespace-nowrap text-accent ">Everyday Essentials Every Day</h2>
          <p>
            Fill your bucket till  midnight it will be delivered to your doorstep by 7am.
          </p>
          <div className="group flex gap-10">
              <img width={150} src={AppStorePng} alt="" />
              <img width={150} src={PlayStorePng} alt="" />
          </div>
        </div>
        </>
  )
}

export default AuthImg