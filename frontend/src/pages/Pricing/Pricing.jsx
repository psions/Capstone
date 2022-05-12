import React from "react";
import './style.css'
import { useNavigate, Link } from "react-router-dom";


const Pricing =()=>{
const navigate = useNavigate();
return(
<div class="container">
    <h2>Choose your Box</h2>
    <div class="price-row">
        <div class="price-col">
            <p>Noob</p>
            <h3>$19 <span>/ month</span></h3>
            <ul>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Razer-RZ02-01940200-R3U1-Sphex-Mini-Polycarbonate/dp/B01N7R3OZ9/ref=sr_1_1?crid=EE695AP686HG&keywords=Razer+sphex+v2+mini+gaming+mouse+pad&qid=1652390500&sprefix=razer+sphex+v2+mini+gaming+mouse+pad%2Caps%2C253&sr=8-1")}>Razer sphex v2 mini gaming mouse pad</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Wired-Gaming-Mouse-Mice-Programmable/dp/B09NM8C4WL/ref=sr_1_3?crid=2XE49VQSZZAJ8&keywords=Wired+Gaming+Mouse%2C+PC+Gaming+Mice%3A+Dacoity+Gamer+Mouse+%5BRGB+LED%5D&qid=1652390475&sprefix=wired+gaming+mouse%2C+pc+gaming+mice+dacoity+gamer+mouse+rgb+led+%2Caps%2C191&sr=8-3")}>Wired Gaming Mouse, PC Gaming Mice: Dacoity Gamer Mouse [RGB LED]</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Controllers-Anti-Sweat-Breathable-Seamless-Touchscreen/dp/B08P7C4WPX/ref=sr_1_3?crid=3CXGLQCOB7K29&keywords=30+Pieces+Finger+Sleeves+for+Gaming+Thumb+Sleeves&qid=1652390446&sprefix=30+pieces+finger+sleeves+for+gaming+thumb+sleeves%2Caps%2C215&sr=8-3")}>30 Pieces Finger Sleeves for Gaming Thumb Sleeves </li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Stynice-Headset-Crystal-Computer-Canceling/dp/B089Y7P8FS/ref=sr_1_3?crid=PDXBROZVI1GA&keywords=Stynice+Gaming+Headset+Headphones+for+Xbox%2C+PC%2C+PS4%2C+PS5%2C+Laptop&qid=1652390415&sprefix=stynice+gaming+headset+headphones+for+xbox%2C+pc%2C+ps4%2C+ps5%2C+laptop%2Caps%2C238&sr=8-3")}>Stynice Gaming Headset Headphones for Xbox, PC, PS4, PS5, Laptop</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Hyperkin-Lens-Protectors-Oculus-Quest-Sets/dp/B087ZKPJXF/ref=sr_1_2?crid=33VDLVKGZ72ZS&keywords=hyperkin+vr+lens+protector+for+oculus+quest+%282+sets%29&qid=1652390390&sprefix=hyperkin+vr+lens+protectors+for+oculus+quest+2+sets+%2Caps%2C184&sr=8-2")}>Hyperkin VR Lens Protectors for Oculus Quest (2 Sets)</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/MFTEK-Keyboard-Rainbow-Illuminated-Computer/dp/B08867HKVF/ref=sr_1_3?crid=31ZGJ63JDCAX5&keywords=Wired+Illuminated+Gaming+Keyboard+for+PC%2FComputer%2FLaptop&qid=1652390368&sprefix=wired+illuminated+gaming+keyboard+for+pc%2Fcomputer%2Flaptop%2Caps%2C200&sr=8-3")}>Wired Illuminated Gaming Keyboard for PC/Computer/Laptop</li>
            </ul>
            <button type="button" onClick={() => navigate("/Payment")}>Noob Life</button>
        </div>
        <div class="price-col">
            <p>Gamer</p>
            <h3>$69 <span>/ month</span></h3>
            <ul>
                <li type='button' onClick={() => window.open("https://www.amazon.com/SteelSeries-PrismSync-Lighting-Programmable-Buttons/dp/B093LSMKL3/ref=sr_1_3?crid=3N6P0LU13HMFP&keywords=Rival%2B5%2BGaming%2BMouse&qid=1652390343&sprefix=rival%2B5%2Bgaming%2Bmouse%2Caps%2C283&sr=8-3&th=1")}>Rival 5 Gaming Mouse</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Compressed-MECO-High-Pressure-Computer-Keyboard/dp/B082XR3987/ref=sr_1_3?crid=1396AHJ33A00T&keywords=MECO+High+Pressure+Air+Duster+Computer+Cleaner&qid=1652390317&sprefix=meco+high+pressure+air+duster+computer+cleaner%2Caps%2C484&sr=8-3")}>MECO High Pressure Air Duster Computer Cleaner</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/SteelSeries-Arctis-Prime-Multiplatform-Compatibility/dp/B0955PVTYX/ref=sr_1_3?crid=12G1LH0PY9F1B&keywords=Arctis+Prime+Headset&qid=1652390294&sprefix=arctis+prime+headset%2Caps%2C182&sr=8-3")}>Arctis Prime Headset </li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/GUNNAR-Gaming-Computer-Glasses-Blocks/dp/B07BSSX9Z6/ref=sr_1_3?crid=18UB7OLFCPPCV&keywords=Gunnar+Gaming+Glasses&qid=1652390270&sprefix=gunnar+gaming+glasses%2Caps%2C179&sr=8-3")}>Gunnar Gaming Glasses</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/SteelSeries-Apex-Gaming-Keyboard-Anti-Ghosting/dp/B09FTNMT84/ref=sr_1_1?crid=3VMREVE0E2PV0&keywords=Apex%2B3%2BTKL&qid=1652390245&sprefix=apex%2B3%2Btkl%2Caps%2C243&sr=8-1&th=1")}>Apex 3 TKL</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/AVerMedia-Live-Gamer-Video-Capture/dp/B06XDM1SK4/ref=sr_1_3?crid=31RROZIDT6C3G&keywords=AVerMedia+Live+Gamer+Mini+Capture+Card&qid=1652390219&sprefix=avermedia+live+gamer+mini+capture+card%2Caps%2C233&sr=8-3")}>AVerMedia Live Gamer Mini Capture Card</li>
            </ul>
            <button type="button" onClick={() => navigate("/Payment")}>Gamer Life</button>
        </div>
        <div class="price-col">
            <p>Go Touch Grass</p>
            <h3>$250 <span>/ month</span></h3>
            <ul>
                <li type='button' onClick={() => window.open("https://www.amazon.com/WD_Black-SN850-Drive-Special-WDBB2F0010BNC-WRSN/dp/B08NX29S65/ref=sr_1_3?keywords=Western%2BDigital%2BCall%2Bof%2BDuty%3A%2BBlack%2BOps%2BSSD&qid=1652389444&sr=8-3&th=1")}>Western Digital Call of Duty: Black Ops SSD</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/HyperX-SoloCast-Microphone-Tap-Mute/dp/B08KFL3SFV/ref=sr_1_3?crid=26GLZUG1B6QLO&keywords=HyperX+SoloCast+USB+Gaming+Microphone&qid=1652390003&sprefix=hyperx+solocast+usb+gaming+microphone%2Caps%2C427&sr=8-3")}>HyperX SoloCast USB Gaming Microphone</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Nezuko-Nicholas-Vaporwave-Pillowcases-Decorative/dp/B08K7L2Q2T")}>Nezuko Nicholas Cage Banana Vaporwave Velvet Throw Pillow</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/POCO-LLC-Poco-Snapdragon-Unlocked/dp/B09HDVK4B5/ref=sr_1_3?crid=1A409Q9TMSU6A&keywords=Xiaomi+POCO+X3+NFC+Gaming+Phone&qid=1652390034&sprefix=xiaomi+poco+x3+nfc+gaming+phone%2Caps%2C334&sr=8-3")}>Xiaomi POCO X3 NFC Gaming Phone</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Razer-Junglecat-Dual-Sided-Mobile-Controller-Android/dp/B07YNM5YG3/ref=sr_1_3?crid=2TT28K7CZRB6J&keywords=Razer+Junglecat+Android+Gaming+Controller&qid=1652390073&sprefix=razer+junglecat+android+gaming+controller%2Caps%2C257&sr=8-3")}>Razer Junglecat Android Gaming Controller)</li>
                <li type='button' onClick={() => window.open("https://www.amazon.com/Razer-Naga-Wireless-Gaming-Mouse/dp/B08D27XXRY/ref=sr_1_3?crid=1N9MY0O18642E&keywords=Razer%2BNaga%2BPro%2BGaming%2BMouse&qid=1652390110&sprefix=razer%2Bnaga%2Bpro%2Bgaming%2Bmouse%2Caps%2C229&sr=8-3&th=1")}>Razer Naga Pro Gaming Mouse</li>
            </ul>
            <button type="button" onClick={() => navigate("/Payment")}>What is grass?</button>
        </div>
    </div>
</div>
)
}
export default Pricing;