import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
       <hr className="enjoy-hr" />
            <footer className="Footer">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAclBMVEX////lCRTkAADlABD++fn83N7mGyP3wMLweX71sLLvgoX1rK/lAAj+9vfrSlD72Nr97/DnEB3wfoLpPUP96uv95efsWl/4u771pan5x8roKzLrQEj70tTzlZnvbXL3trnnIivqMzvtY2nznJ/qU1fwjZCE6y5/AAAC40lEQVRoge2W2ZaiMBBAs7CpYVMQUGnB5f9/caoSkKU74Jx2nqbugyQCuUmoVMIYQRAEQRAEQRAEQRAEQRAE8b8QCgALWVeIxUDONqOadNluVGUsgN/y1VIBtS9oMILrFv8o8anQ4nUE56KCQiIlR6/rSW6QXs6ugvfIE3bjVUsZ2woudq+WfKgFcN0Jrk4JdOABf2xt49Xe/dwrEaW9UNAeqXqvuWn16hZ9xi6CS3FZ8somm3lTTZPD5MEVxWnKW+M193hj88L0c3Fk7AaXyKbVXi6KiVcd3EQDt+G3gomLcl3dYNthf9PirWA6PDeH/uOwF73HmTcZPxKj18QHevevGxavc1Zc3Et4a9rOdy90b+rNfuOFQIYWW2iutmqNl8Ny+KA3g4iA1qSwD7fzqvMH51lHFg4msGs7Lxf5yCubIAi+jv0amHo59wAI9QVvZbzVmhc/RciHdSR1QuqDce7F1csXvQyXnmoXtNqbniQslHSWr6xe3dFl7x1zx2bNK2t4xffm4y1+9vape9VrzVW9V8SpVMfT8H1PZVH4RR9c3+LKAdiiV8Cc4Sax4nUeCsKFfyyeryZobHvRy8vqLqrZR9av8zDxfF31Zh/14jKSJvuuePse/r13CNrBCzuRbFE8aeYnL6bUkfesLU7yhnfvVxc3C8feGFdkEcHm8Fz1ZmMv96JDA+slzVe93aoS8XT/VQcHHlXn5f0IdbB3DV6uFJ4pvDe8XY4ZeUOhd6KskUuZsvfuxNirs+EwXiEOxovnuiHb77vBKjX24i6o4Mt+Qf226nUbTFNY6KYubaObiYvkXpaFThQsdF13mDu/rp/PbXB7RLB/6/MkeMOTkPo4h+craY2s3suOoIKzGsu2dVnEeZYloWPt7bSJMEzg0aQq7pBaL4fWEy72ESNrZ32pPz9fiirO3xOtkLnms96h5bPV+7xeFo4Fv8Mt6qVcSRAEQRAEQRAEQRAEQRAEQfwb/gApjinSEUmDQwAAAABJRU5ErkJggg==" alt="" />
            </footer>
      <ul className="list">
        <a href="/" className="tag">
          Home
        </a>

        <a href="/" className="tag">
          Terms and Conditions
        </a>

        <a href="/" className="tag">
          Privacy Policy
        </a>

        <a href="/" className="tag">
          Collection Statement
        </a>

        <a href="/" className="tag">
          Help
        </a>

        <a href="/" className="tag">
          Manage Account
        </a>
      </ul>
      <p className="para">
        Copyright © 201
        <span style={{ fontWeight: "lighter", fontSize: "23px" }}>6</span> DEMO
        Streaming. All Rights Reserved.
      </p>
      <div className="links-1">
        <div className="icon"></div>
        <div className="img">
          <img
            alt=""
            className="image"
            src={`/assets/microsoft.png`}
          />
          <img
            alt=""
            className="image"
            src={`/assets/appStore.png`}
          />
          <img
            alt=""
            className="image"
            src={`/assets/googleP.png`}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
