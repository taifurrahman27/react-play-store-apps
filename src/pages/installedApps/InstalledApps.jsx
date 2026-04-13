import React, { useContext } from "react";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { toast } from "react-toastify";

const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

    const handleUninstall = (app) => {

        const restApps = installedApps.filter((iApp) => iApp.id != app.id);

        setInstalledApps(restApps);
        toast.warning(`${app.title} is uninstalled!`);
    };

    return (
        <div className="container mx-auto my-10">
            {installedApps.length === 0 ? (
                <div className="bg-gray-100 h-80 flex justify-center items-center">

                    <h2 className="font-bold text-4xl text-center my-5">
                        No installed apps found!
                    </h2>
                </div>
            ) : (
                installedApps.map((app, ind) => {
                    return (
                        <div
                            key={ind}
                            className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
                        >
                            <div>
                                <img src={app.image} className="h-24 w-auto" alt="" />
                                <h2 className="font-semibold text-2xl text-purple-500">{app.title} </h2><span className="text-sm">By {app.companyName}</span>

                            </div>
                            <button
                                className="btn bg-secondary text-white"
                                onClick={() => handleUninstall(app)}
                            >
                                Uninstall
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default InstallApps;