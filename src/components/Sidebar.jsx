import { AiOutlineDashboard } from "react-icons/ai";

function Sidebar() {
  return (
    <div>
      <aside className="sidebar bg-slate-700 text-white">
        <div>
          <a href="" className="font-medium flex gap-2 items-center">
            <div className="p-1 bg-slate-500 rounded flex items-center">
              <AiOutlineDashboard className="text-xl" />
            </div>
            <h1>Dashboard</h1>
          </a>
        </div>

        <div>
          <h5 className="text-sm mb-2 text-slate-300">Pages</h5>
          <ul className="px-5">
            <li>
              <a href="" className="font-medium flex gap-2 items-center">
                <div className="p-1 bg-slate-500 rounded flex items-center">
                  <AiOutlineDashboard className="text-xl" />
                </div>
                <h1>Dashboard</h1>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
