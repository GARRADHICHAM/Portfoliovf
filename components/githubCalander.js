import GitHubCalendar from 'react-github-calendar';

const GitHubCal = () => {
    return (
        <div className="flex-col bg-white p-4 rounded-lg drop-shadow-sm h-auto px-6 " >
            <h1 className="font-Helvetica font-bold text-2xl mb-4">Github Calendar </h1>
            <GitHubCalendar username="GARRADHICHAM" />




        </div>
    )
}

export default GitHubCal;