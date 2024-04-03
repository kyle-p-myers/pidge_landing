
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    return (
        <div className="bg-gradient-to-b from-purple-400 to-purple-700">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 text-white content-center text-left w-full pt-6">
                <div className="font-semibold place-self-center">Company</div>
                <div className="font-semibold place-self-center" > Product</div>
                <div className="font-semibold place-self-center">Integrations</div>
                <div className="font-semibold place-self-center">Support</div>
                <div className="font-semibold place-self-center">Resources</div>
                <div className="place-self-center">About Us</div>
                <div className="place-self-center">Features</div>
                <div className="place-self-center">Jira</div>
                <div className="place-self-center">Help Center</div>
                <div className="place-self-center">Blog</div>
                <div className="place-self-center">Team</div>
                <div className="place-self-center">Customer</div>
                <div className="place-self-center">Azure DevOps</div>
                <div className="place-self-center">FAQs</div>
                <div className="place-self-center">NewsLetter</div>
                <div className="place-self-center">Press</div>
                <div className="place-self-center"> Pricing</div>
                <div className="place-self-center">Zendesk</div>
                <div className="place-self-center">Slack</div>
                <div className="place-self-center">Status</div>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 mt-8">
                <div className="place-self-center" >© Pidge 2024</div>
                <div className="place-self-center underline" >Privacy Policy</div>
                <div className="place-self-center underline" >Terms of Service</div>
                <div className="place-self-center underline" >Contact Us</div>
                <div className="col-start-5 place-self-center" >Follow Us:</div>
                <div className="col-start-5 row-start-2 pb-6 place-self-center"> <InstagramIcon/> <LinkedInIcon/> <XIcon/> </div>
            </div>
        </div>

    )
}