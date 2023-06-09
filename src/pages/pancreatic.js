import Background from '../assets/Pancreatic.jpg';
import {useState} from "react";
import axios from "axios";

const Pancreatic = () => {

    const [patientCohort, setPatientCohort] = useState(0);
    const [sampleOrigin, setSampleOrigin] = useState(0);
    const [age, setAge] = useState(74);
    const [sex, setSex] = useState(1);
    const [stage, setStage] = useState(8);
    const [plasma_CA19_9, setPlasma_CA19_9] = useState(1488);
    const [creatinine, setCreatinine] = useState(1.50423);
    const [lyve1, setLyve1] = useState(8.200958);
    const [REG1B, setREG1B] = useState(411.938275);
    const [TFF1, setTFF1] = useState(2021.321078);
    const [REG1A, setREG1A] = useState(13200);

    const [result, setResult] = useState("");

    const onSubmit = async () => {
        console.log({
            values: [patientCohort, sampleOrigin, age, sex, stage, plasma_CA19_9, creatinine, lyve1, REG1B, TFF1, REG1A]
        });
        const res = await axios.post("http://127.0.0.1:8000/predict/", {
            values: [patientCohort, sampleOrigin, age, sex, stage, plasma_CA19_9, creatinine, lyve1, REG1B, TFF1, REG1A]
        });
        setResult(res.data.Result);
    }

    return (<div className="bg-cover h-full bg-no-repeat flex items-center px-16 pt-[120px] pb-[20px]"
                 style={{backgroundImage: `url(${Background})`}}>
        <div className="flex flex-row items-center w-full ">
            <form className="w-full max-w-lg bg-white p-10 rounded-xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Patient Cohort
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="number" placeholder="Patient Cohort" value={patientCohort}
                            onChange={(e) => setPatientCohort(e.target.value)}/>
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-last-name">
                            Sample Origin
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="number" placeholder="Sample Origin" value={sampleOrigin}
                            onChange={(e) => setSampleOrigin(e.target.value)}/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Age
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="number" placeholder="Age" value={age}
                            onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-state">
                            Sex
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)} // update sex when user selects an option
                            >
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            Stage
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="number" placeholder="Stage" value={stage}
                            onChange={(e) => setStage(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Plasma_CA19_9
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="number" placeholder="Plasma_CA19_9" value={plasma_CA19_9}
                            onChange={(e) => setPlasma_CA19_9(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Creatinine
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="number" placeholder="Creatinine" value={creatinine}
                            onChange={(e) => setCreatinine(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            LYVE1
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="number" placeholder="LYVE1" value={lyve1}
                            onChange={(e) => setLyve1(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            REG1B
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="number" placeholder="REG1B" value={REG1B}
                            onChange={(e) => setREG1B(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            TFF1
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="number" placeholder="TFF1" value={TFF1}
                            onChange={(e) => setTFF1(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            REG1A
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="number" placeholder="REG1A" value={REG1A}
                            onChange={(e) => setREG1A(e.target.value)}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl"
                        type="button" onClick={onSubmit}> Send
                    </button>

                </div>
            </form>
            <div className="flex justify-center items-center ml-[300px]">
                <h1 className="text-2xl font-bold text-white">
                    {result}
                </h1>
            </div>
        </div>

    </div>);
}

export default Pancreatic;
