import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex margin-top gap hex-820347 pad1rem">
            <p>
                <a 
                    href="https://github.com/EssenceCode" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    EssenceCode
                    {" "}
                    <FaGithub/>
                </a>
        </p>
        </footer>
    )
}