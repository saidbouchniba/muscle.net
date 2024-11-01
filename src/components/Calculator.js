import React, { useState } from 'react'
import Header from './Header'
import logo from '../assets/Logo.png'
import { toast } from 'react-toastify'
function Calculator() {
    const [gender, setgender] = useState("")
    const [weight, setweight] = useState(0)
    const [calories,setcalories]= useState(0)
    const [protein,setprotein]= useState(0)
    const [Carbohydrates,setCarbohydrates]= useState(0)
    const [Fat,setFat]= useState(0)
    const Handelsubmit = ()=>{
        var x=weight*22*1.55
        if (weight===0) {
            toast.error("You forgot to put your weight on")
        }
        else{
            setcalories(x)
            setprotein(weight*1.4)
            setFat(weight*0.7)
        setCarbohydrates(x/4)
        setTimeout(() => {
            toast.success("Congratulations, check out our diet plan and choose what you want")
        }, 2000);
       
        }

    }
    return (
        <div>
            <Header />
            <div className="MuiBox-root css-xi606m" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                <h1 className="MuiTypography-root MuiTypography-h1 css-8bzon4" style={{textTransform:"uppercase"}}>
                Calorie Calculator
                </h1>
                <p className="MuiTypography-root MuiTypography-body1 css-6cplfy">
                    The Calorie Calculator can be used to estimate the calories you need to consume each day. This calculator can also provide some simple guidelines if you want to gain or lose weight.

                </p>
            </div>

            {/* options to calculate */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
                {/* gender div */}
                <div id='calculate' style={{ height: "130px", fontSize: "0.5rem", border: "1px solid", textAlign: "center", padding: "0%", borderRadius: "1rem" }} className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-166mr1s">
                    <div className="MuiCardContent-root css-1qw96cp">
                        <h2 className="MuiTypography-root MuiTypography-h2 css-spclo9" style={{ fontSize: "1.5rem" }}>
                            What is your sex?
                        </h2>
                        <div className="MuiGrid-root MuiGrid-container css-avgezi" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-sm-3 css-1q1x2cz">
                                <div className="MuiBox-root css-fzwid6">
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15a5o9g"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 48 48"
                                        width={48}
                                        height={48}
                                        fill="none"
                                    >
                                        <path
                                            d="M29 31C29 31 28 35 24 35C20 35 19 31 19 31C19 31 8 32.986 8 44H40C40 33.025 29 31 29 31Z"
                                            fill="#AAF0C4"
                                        />
                                        <path
                                            d="M24 37C19 37 19 31 19 31V25H29V31C29 31 29 37 24 37Z"
                                            fill="#FF9800"
                                        />
                                        <path
                                            d="M35 19C35 20.106 34.104 21 33 21C31.895 21 31 20.106 31 19C31 17.895 31.895 17 33 17C34.104 17 35 17.895 35 19ZM17 19C17 17.895 16.104 17 15 17C13.894 17 13 17.895 13 19C13 20.106 13.894 21 15 21C16.104 21 17 20.106 17 19Z"
                                            fill="#FFA726"
                                        />
                                        <path
                                            d="M33 13C33 5.365 15 8.029 15 13V20C15 24.971 19.028 29 24 29C28.971 29 33 24.971 33 20V13Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M24 4C17.925 4 14 8.926 14 15V17.286L16 19V14L28 10L32 14V19L34 17.258V15C34 10.975 32.962 6.984 28 6L27 4H24Z"
                                            fill="#424242"
                                        />
                                        <path
                                            d="M27 19C27 18.449 27.448 18 28 18C28.552 18 29 18.449 29 19C29 19.551 28.552 20 28 20C27.448 20 27 19.551 27 19ZM19 19C19 19.551 19.448 20 20 20C20.552 20 21 19.551 21 19C21 18.449 20.552 18 20 18C19.448 18 19 18.449 19 19Z"
                                            fill="#784719"
                                        />
                                        <path
                                            d="M23.9999 37C28.9999 37 30.7449 33.07 30.9499 31.572C29.7939 31.148 28.9999 31 28.9999 31C28.9999 31 27.9999 35 23.9999 35C19.9999 35 18.9999 31 18.9999 31C18.9999 31 18.2049 31.145 17.0479 31.566C17.2519 33.061 18.9999 37 23.9999 37Z"
                                            fill="#099250"
                                        />
                                    </svg>
                                </div>
                                <button style={{ background: gender == "male" ? "#edfcf2" : "transparent", padding: "5px 10px", borderRadius: "0.5rem", color: "green" }}
                                    className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSuccess MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedSuccess MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth css-qjqgm3"
                                    tabIndex={0}
                                    type="button"
                                    onClick={() => setgender("male")}
                                >
                                    Male
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                </button>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-sm-3 css-e1vfhi">
                                <div className="MuiBox-root css-fzwid6">
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15a5o9g"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 48 48"
                                        width={48}
                                        height={48}
                                        fill="none"
                                    >
                                        <path d="M16 15H32V33H16V15Z" fill="#BF360C" />
                                        <path d="M16 15H32V33H16V15Z" fill="#BF360C" />
                                        <path d="M16 15H32V33H16V15Z" fill="#4E342E" />
                                        <path
                                            d="M24 37C21.807 37 19 31 19 31V25H29V31C29 31 26.192 37 24 37Z"
                                            fill="#FF9800"
                                        />
                                        <path
                                            d="M33 14C33 6.365 15 9.029 15 14V21C15 25.971 19.028 30 24 30C28.971 30 33 25.971 33 21V14Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M24 4C17.925 4 9 7.404 9 27.286L16 32V19L28 12L32 17V32L39 26C39 21.975 38.326 6 28 6L27 4H24Z"
                                            fill="#795548"
                                        />
                                        <path
                                            d="M24 38C19.58 38 19 31 19 31C19 31 21.507 35 24 35C26.493 35 29 31 29 31C29 31 28.42 38 24 38Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M27 21C27 21.551 27.448 22 28 22C28.552 22 29 21.551 29 21C29 20.449 28.552 20 28 20C27.448 20 27 20.449 27 21ZM19 21C19 21.551 19.448 22 20 22C20.552 22 21 21.551 21 21C21 20.449 20.552 20 20 20C19.448 20 19 20.449 19 21Z"
                                            fill="#784719"
                                        />
                                        <path
                                            d="M24 37C21.807 37 19 31 19 31V25H29V31C29 31 26.192 37 24 37Z"
                                            fill="#FF9800"
                                        />
                                        <path
                                            d="M33 14C33 6.365 15 9.029 15 14V21C15 25.971 19.028 30 24 30C28.971 30 33 25.971 33 21V14Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M24 4C17.925 4 9 7.404 9 27.286L16 32V19L28 12L32 17V32L39 26C39 21.975 38.326 6 28 6L27 4H24Z"
                                            fill="#795548"
                                        />
                                        <path
                                            d="M24 38C19.58 38 19 31 19 31C19 31 21.507 35 24 35C26.493 35 29 31 29 31C29 31 28.42 38 24 38Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M27 21C27 21.551 27.448 22 28 22C28.552 22 29 21.551 29 21C29 20.449 28.552 20 28 20C27.448 20 27 20.449 27 21ZM19 21C19 21.551 19.448 22 20 22C20.552 22 21 21.551 21 21C21 20.449 20.552 20 20 20C19.448 20 19 20.449 19 21Z"
                                            fill="#784719"
                                        />
                                        <path
                                            d="M29 31C29 31 28 35 24 35C20 35 19 31 19 31C19 31 8 32.986 8 44H40C40 33.025 29 31 29 31Z"
                                            fill="#AAF0C4"
                                        />
                                        <path
                                            d="M24 37C21.807 37 19 31 19 31V25H29V31C29 31 26.192 37 24 37Z"
                                            fill="#FF9800"
                                        />
                                        <path
                                            d="M33 14C33 6.365 15 9.029 15 14V21C15 25.971 19.028 30 24 30C28.971 30 33 25.971 33 21V14Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M24 4C17.925 4 9 7.404 9 27.286L16 32V19L28 12L32 17V32L39 26C39 21.975 38.326 6 28 6L27 4H24Z"
                                            fill="#795548"
                                        />
                                        <path
                                            d="M24 38C19.58 38 19 31 19 31C19 31 21.507 35 24 35C26.493 35 29 31 29 31C29 31 28.42 38 24 38Z"
                                            fill="#FFB74D"
                                        />
                                        <path
                                            d="M23.9998 40C28.7458 40 30.5708 34.885 30.9488 31.572C29.7928 31.148 28.9998 31 28.9998 31C28.9998 31 28.4198 38 23.9998 38C19.5798 38 18.9998 31 18.9998 31C18.9998 31 18.2058 31.145 17.0498 31.566C17.4268 34.878 19.2508 40 23.9998 40Z"
                                            fill="#099250"
                                        />
                                        <path
                                            d="M27 21C27 20.449 27.448 20 28 20C28.552 20 29 20.449 29 21C29 21.551 28.552 22 28 22C27.448 22 27 21.551 27 21ZM19 21C19 21.551 19.448 22 20 22C20.552 22 21 21.551 21 21C21 20.449 20.552 20 20 20C19.448 20 19 20.449 19 21Z"
                                            fill="#784719"
                                        />
                                    </svg>
                                </div>
                                <button style={{ background: gender == "female" ? "#edfcf2" : "transparent", padding: "5px 10px", borderRadius: "0.5rem", color: "green" }}
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-disableElevation MuiButton-fullWidth css-1k8882v"
                                    tabIndex={0}
                                    type="button"
                                    onClick={() => setgender("female")}
                                >
                                    Female
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* age div */}

                <div id='calculate' style={{ height: "100px", fontSize: "0.5rem", border: "1px solid", marginLeft: "10%", textAlign: "center", padding: "0%", borderRadius: "1rem" }} className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-166mr1s">
                    <div className="MuiCardContent-root css-1qw96cp">
                        <h2 className="MuiTypography-root MuiTypography-h2 css-spclo9" style={{ fontSize: "1.5rem" }}>
                            How old are you?
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="MuiFormControl-root MuiTextField-root css-1ha1e7p" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                <div
                                    min={0}
                                    className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-73lhxa"
                                    style={{ fontSize: 30, fontWeight: 700, color: "rgb(52, 64, 84)" }}
                                >
                                    <input
                                        aria-invalid="false"
                                        id=":r0:"
                                        placeholder={21}
                                        type="number"
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                        className="MuiInputBase-input MuiInput-input css-mnn31"
                                        defaultValue=""
                                        min={12}
                                        max={100}
                                        style={{ textAlign: "center", width: "70%", color: "#FAF0E6" }}
                                    />
                                </div>
                            </div>
                            <div style={{ fontSize: "1.5rem" }} className="MuiTypography-root MuiTypography-body1 css-m3ltxs">
                                Years
                            </div>
                        </div>
                    </div>
                </div>

                {/* height div */}
                <div id='calculate' style={{ height: "100px", fontSize: "0.5rem", border: "1px solid", marginLeft: "10%", textAlign: "center", padding: "0%", borderRadius: "1rem" }} className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-166mr1s">
                    <div className="MuiCardContent-root css-1qw96cp">
                        <h2 style={{ fontSize: "1.5rem" }} className="MuiTypography-root MuiTypography-h2 css-spclo9">
                            How tall are you?
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="MuiFormControl-root MuiTextField-root css-1ha1e7p" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                <div
                                    min={0}
                                    className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-73lhxa"
                                    style={{ fontSize: 30, fontWeight: 700, color: "rgb(52, 64, 84)" }}
                                >
                                    <input
                                        aria-invalid="false"
                                        id=":r0:"
                                        placeholder={21}
                                        type="number"
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                        className="MuiInputBase-input MuiInput-input css-mnn31"
                                        defaultValue=""
                                        min={100}
                                        max={250}
                                        style={{ textAlign: "center", width: "70%" }}
                                    />
                                </div>
                            </div>
                            <div style={{ fontSize: "1.5rem" }} className="MuiTypography-root MuiTypography-body1 css-m3ltxs">
                                Cm
                            </div>
                        </div>
                    </div>
                </div>


                {/* weight div */}

                <div id='calculate' style={{ height: "100px", fontSize: "0.5rem", border: "1px solid", marginLeft: "10%", textAlign: "center", padding: "0%", borderRadius: "1rem" }} className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-166mr1s">
                    <div className="MuiCardContent-root css-1qw96cp">
                        <h2 style={{ fontSize: "1.5rem" }} className="MuiTypography-root MuiTypography-h2 css-spclo9">
                            How much do you weigh?
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="MuiFormControl-root MuiTextField-root css-1ha1e7p" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                <div
                                    min={0}
                                    className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-73lhxa"
                                    style={{ fontSize: 30, fontWeight: 700, color: "rgb(52, 64, 84)" }}
                                >
                                    <input
                                        aria-invalid="false"
                                        id=":r0:"
                                        placeholder={21}
                                        type="number"
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                        className="MuiInputBase-input MuiInput-input css-mnn31"
                                        defaultValue=""
                                        min={12}
                                        max={100}
                                        style={{ textAlign: "center", width: "70%" }}
                                        onChange={(e) => setweight(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div style={{ fontSize: "1.5rem" }} className="MuiTypography-root MuiTypography-body1 css-m3ltxs">
                                Kg
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div style={{ display: "flex", justifyContent: "center", padding: "0 10%", gap: "1%" }}>
                <div className="flex flex-col w-full" style={{ width: "50%" }}>
                    <label style={{ fontFamily: "Itim", fontSize: "1.5rem" }}
                        className="block font-bold text-sm sm:text-md tracking-widest uppercase text-mw-blue select-none"
                        id="headlessui-listbox-label-:r2v:"
                        data-headlessui-state=""
                    >
                        activity level :
                    </label>
                    <div className="relative w-full">
                        <select style={{ width: "100%", height: "40px", }}>
                            <option>Little to no exercise</option>
                            <option>Light exercise (1-3 per week)</option>
                            <option>Moderate exercise (3-5 per week)</option>
                            <option>Heavy exercise (6-7 per week)</option>
                            <option>Very heavy exercice (twice per day , extra heavy workouts)</option>
                        </select>
                    </div>

                </div>

                <div className="flex flex-col w-full" style={{ width: "50%" }}>
                    <label style={{ fontFamily: "Itim", fontSize: "1.5rem" }}
                        className="block font-bold text-sm sm:text-md tracking-widest uppercase text-mw-blue select-none"
                        id="headlessui-listbox-label-:r2v:"
                        data-headlessui-state=""
                    >
                        Goal :
                    </label>
                    <div className="relative w-full">
                        <select style={{ width: "100%", height: "40px", }}>
                            <option>Gain some weight</option>
                            <option>Lose some weight</option>
                            <option>Maintain the same weight</option>

                        </select>
                    </div>

                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "25px", flexDirection: "column" }}>
                <button onClick={Handelsubmit} style={{ background: "#0d6efd", padding: "1%", borderRadius: "1rem" }}>CALCULATE</button>
                <h1 style={{fontSize:"20px"}}>You would have to consume:</h1>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",width:"80%",background:"#0d6efd",borderRadius:"1rem",fontFamily:"Itim"}}>
                    

                    <h2>{Math.trunc(calories)} Calories</h2>
                    <h3>{Math.trunc(protein)} protein</h3>
                    <h4>{Math.trunc(Fat)} fat</h4>
                    <h4>{Math.trunc(Carbohydrates)} Carbohydrates</h4>
                </div>
            </div>

            <style>
                {` 
                    ::placeholder { 
                        color:#D2B48C ; 
                    }`
                }
            </style>
        </div>
    )
}

export default Calculator