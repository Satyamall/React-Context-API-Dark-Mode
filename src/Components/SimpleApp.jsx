
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContextProvider";

const MainBox = styled.div`
    width: 450px;
    height: 600px;
    top: 30px;
    left: 122px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const HeaderBox=styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
const UsersBox = styled.div`
    width: 100%;
    height: 80%;
    border: 1px solid red;
    background: aquamarine;
    padding: 25px;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
`;
export default function SimpleApp() {

    const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);
    const currentTheme = themeData[theme];
    return (
        <MainBox style={{
            color: currentTheme.color,
            background: currentTheme.background
        }}>
            <HeaderBox>
                <h1>My Dashboard</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p>Switch to {theme === "light" ? "Dark" : "Light"} Mode</p>
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} />
                        <span className="slider round"> </span>
                    </label>
                </div>
            </HeaderBox>
            <UsersBox style={{
                color: currentTheme.color,
                background: currentTheme.background
            }}>
                <Header>
                    <h1>Active Users</h1>
                    <p>for December 2021</p>
                </Header>
                <User>
                    <Header>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <img style={{ width: "50px", height: "50px", borderRadius: "50px" }} src="https://lh3.googleusercontent.com/ogw/ADea4I5nUDw8BDzBDsmWlB_Gj7GcA8opMT6BKtV4-74--w=s64-c-mo" alt="" />
                            <div style={{ lineHeight: "0px" }}>
                                <h5>Satya Prakash Mall</h5>
                                <p>Kushinagar, India</p>
                            </div>
                        </div>
                        <div>...</div>
                    </Header>
                    <div style={{ width: "100%", height: "5px", background: "white" }}>
                        <div style={{ width: "65%", height: "5px", background: "green" }}></div>
                    </div>
                    <Header>
                        <p>Professional Level 15</p>
                        <h5>4723 points</h5>
                    </Header>
                </User>
                <User>
                    <Header>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <img style={{ width: "50px", height: "50px", borderRadius: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioAjN7L_M3dVF3jGb4X6h1bYRe9YR8Ec_hg&usqp=CAU" alt="" />
                            <div style={{ lineHeight: "0px" }}>
                                <h5>Jaswant Chaudhary</h5>
                                <p>Siddharthnagar, India</p>
                            </div>
                        </div>
                        <div>...</div>
                    </Header>
                    <div style={{ width: "100%", height: "5px", background: "white" }}>
                        <div style={{ width: "50%", height: "5px", background: "blue" }}></div>
                    </div>
                    <Header>
                        <p>Professional Level 11</p>
                        <h5>2339 points</h5>
                    </Header>
                </User>
                <User>
                    <Header>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <img style={{ width: "50px", height: "50px", borderRadius: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIH3cVN9nVOwezMJZgjRo0YhASylFMo1nJpw&usqp=CAU" alt="" />
                            <div style={{ lineHeight: "0px" }}>
                                <h5>Anamika Gupta</h5>
                                <p>Kanpur, India</p>
                            </div>
                        </div>
                        <div>...</div>
                    </Header>
                    <div style={{ width: "100%", height: "5px", background: "white" }}>
                        <div style={{ width: "35%", height: "5px", background: "violet" }}></div>
                    </div>
                    <Header>
                        <p>Professional Level 6</p>
                        <h5>1884 points</h5>
                    </Header>
                </User>
            </UsersBox>
        </MainBox>
    )
}