import ServiceSwitch from "./ui/buttons/ServiceSwitch";
import GoogleCalendarEmbed from "./ui/Calendar";

const ComplementarySidebar = () => {
    return <div className="w-[350px] p-2">
        <GoogleCalendarEmbed></GoogleCalendarEmbed>
        <div>
            <ServiceSwitch/>
        </div>
    </div>
}

export default ComplementarySidebar;