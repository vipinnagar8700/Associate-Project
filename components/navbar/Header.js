import "./Header.css"
function NavigationNav() {
  return (
    <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <li className="navbar-brand nav-item dropdown my-auto d-flex gap-2">
        <div className="d-flex gap-2">
          <div className="img">
            <img src="img/logo.png" className="img-fluid pe-2" />
          </div>
          <div className="name my-auto py-auto">
            <p className="my-auto">Programs</p>
          </div>
        </div>
        <a
          className="h_dropdown"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="dropdown-toggle" />
        </a>
        <ul className="dropdown-menu line" aria-labelledby="navbarDropdown">
          <li>
            <div>
              <a href="#">
                <img src="img/associates.png" className="img-fluid" />
              </a>
              <a className="dropdown-item" href="#">
                Associates
              </a>
            </div>
            <div className="count">
              <span>1</span>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <img src="img/stations.png" className="img-fluid" />
              </a>
              <a className="dropdown-item" href="#">
                Station Sessions
              </a>
            </div>
            <div className="count">
              <span>19</span>
              <span>54</span>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <img src="img/workstation.png" className="img-fluid" />
              </a>
              <a className="dropdown-item" href="#">
                Stations
              </a>
            </div>
            <div className="count">
              <span>21</span>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <img src="img/stationborad.png" className="img-fluid" />
              </a>
              <a className="dropdown-item" href="#">
                Project Boards
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <img src="img/emails.png" className="img-fluid" />
              </a>
              <a className="dropdown-item" href="#">
                Emails
              </a>
            </div>
            <div className="count">
              <span>237</span>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <img src="img/projecttask.png" className="img-fluid" />
              </a>
              <a className="dropdown-item" href="#">
                Project Tasks
              </a>
            </div>
          </li>
        </ul>
      </li>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
          <li className="nav-item line my-auto">
            <a
              className="nav-link active "
              aria-current="page"
              href="#"
            >
              <p className="rounded-pill m-0">Sign up  for <br/> Free Trial Now</p>
            </a>
          </li>
          <li className="nav-item my-auto line">
            <a className="nav-link ps-0 pe-0" aria-current="page" href="#" >
              <img src="img/header-station.png" className="img-fluid p-2" />
            </a>
          </li>
          <li className="nav-item my-auto line">
            <a className="nav-link ps-0" aria-current="page" href="#">
              <img src="img/header-edit-station.png" className="img-fluid p-2" />
            </a>
          </li>
          {/* <li className="nav-item my-auto line ms-0 my-auto dropdown">
            <a
              className="nav-link dropdown-toggle"
              aria-current="page"
              href="#"
              id="sign-dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <div
              className="dropdown-menu sign bg-white w-100"
              aria-labelledby="sign-dropdown"
            >
              <form>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <th>S.No</th>
                      <th>Remove From Main Page </th>
                      <th>Restore</th>
                      <th>Remove</th>
                    </tr>
                    <tr className="odd">
                      <td>1</td>
                      <td>Voice Files</td>
                      <td>
                        <input type="radio" name="voice" />
                      </td>
                      <td>
                        <input type="radio" name="voice" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>2</td>
                      <td>Quick View</td>
                      <td>
                        <input type="radio" name="Quick" />
                      </td>
                      <td>
                        <input type="radio" name="Quick" />
                      </td>
                  </tr>
                    <tr className="odd">
                      <td>3</td>
                      <td>Hide Notification</td>
                      <td>
                        <input type="radio" name="Hide Notification" />
                      </td>
                      <td>
                        <input type="radio" name="Hide Notification" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>4</td>
                      <td>Silence audible station notifications</td>
                      <td>
                        <input type="radio" name="hide" />
                      </td>
                      <td>
                        <input type="radio" name="hide" />
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>5</td>
                      <td>Text Messages</td>
                      <td>
                        <input type="radio" name="text" />
                      </td>
                      <td>
                        <input type="radio" name="text" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>6</td>
                      <td>Reminders</td>
                      <td>
                        <input type="radio" name="Reminders" />
                      </td>
                      <td>
                        <input type="radio" name="Reminders" />
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>7</td>
                      <td>Recent Videos</td>
                      <td>
                        <input type="radio" name="Recent Videos" />
                      </td>
                      <td>
                        <input type="radio" name="Recent Videos" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>8</td>
                      <td>Recent Photos</td>
                      <td>
                        <input type="radio" name="Recent Photos" />
                      </td>
                      <td>
                        <input type="radio" name="Recent Photos" />
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>9</td>
                      <td>New Mail</td>
                      <td>
                        <input type="radio" name="New Mail" />
                      </td>
                      <td>
                        <input type="radio" name="New Mail" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>10</td>
                      <td>Network Videos</td>
                      <td>
                        <input type="radio" name="Network Videos" />
                      </td>
                      <td>
                        <input type="radio" name="Network Videos" />
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>11</td>
                      <td>Network Logs</td>
                      <td>
                        <input type="radio" name="Network Logs" />
                      </td>
                      <td>
                        <input type="radio" name="Network Logs" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>12</td>
                      <td>Network Documents</td>
                      <td>
                        <input type="radio" name="Network Documents" />
                      </td>
                      <td>
                        <input type="radio" name="Network Documents" />
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>13</td>
                      <td>Network Alerts</td>
                      <td>
                        <input type="radio" name="Network Alerts" />
                      </td>
                      <td>
                        <input type="radio" name="Network Alerts" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>14</td>
                      <td>Message Board</td>
                      <td>
                        <input type="radio" name="Message Board" />
                      </td>
                      <td>
                        <input type="radio" name="Message Board" />
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>15</td>
                      <td>Discussions</td>
                      <td>
                        <input type="radio" name="Discussions" />
                      </td>
                      <td>
                        <input type="radio" name="Discussions" />
                      </td>
                    </tr>
                    <tr className="even">
                      <td>16</td>
                      <td>Calendar</td>
                      <td>
                        <input type="radio" name="Calendar" />
                      </td>
                      <td>
                        <input type="radio" name="Calendar" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-3 text-center submit-btn">
                  <input type="submit" defaultValue="Submit" />
                </div>
              </form>
            </div>
          </li> */}
          <li className="nav-item my-auto line">
            <a className="nav-link" aria-current="page" href="#">
              <img src="img/company_logo.png" className="img-fluid" />
            </a>
          </li>
          <li className="nav-item my-auto line dropdown">
            <a
              className="nav-link dropdown-toggle"
              aria-current="page"
              href="#"
              id="John-dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="img/john.jpg" className="img-fluid me-1" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="John-dropdown">
              <li>
                <a href="#">Video Demo</a>
              </li>
              <li>
                <a href="#">PPT Tutorial</a>
              </li>
              <li>
                <a href="#">Add / Create Blog</a>
              </li>
              <li>
                <a href="#">My Profile</a>
              </li>
              <li>
                <a href="#">Invite Associates</a>
              </li>
              <li>
                <a href="#">Admin Access</a>
              </li>
              <li>
                <a href="#">Add New User</a>
              </li>
              <li>
                <a href="#">Color Selection</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
          <li className="nav-item my-auto line px-2">
            <a className="nav-link home" aria-current="page" href="#">
              <i className="fa fa-home" />
            </a>
          </li>
          <li className="nav-item my-auto">
            <a className="nav-link lh-0" aria-current="page" href="#">
              <i className="fa fa-question-circle" />
            </a>
          </li>
          {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
        </ul>
      </div>
    </div>
  </nav>
</header>

  );
}

export default NavigationNav;