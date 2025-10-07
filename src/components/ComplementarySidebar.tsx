import ServiceSwitch from "./ui/buttons/ServiceSwitch";
import GoogleCalendarEmbed from "./ui/Calendar";

const ComplementarySidebar = () => {
    return <div className="w-[350px] p-2">
        <GoogleCalendarEmbed></GoogleCalendarEmbed>
        <div className="py-5 flex justify-center items-center">
            <ServiceSwitch/>
        </div>
    </div>
}

export default ComplementarySidebar;