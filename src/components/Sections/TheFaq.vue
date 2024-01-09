<template>
    <div class="container max-w-screen-xl mx-auto w-full h-full bg-brand-black-1 py-24 px-14 sm:px-5 sm:py-20 lg:px-5">
        <HeadingText text="FAQ" ptext="Frequently Asked Questions" class="pb-24 sm:py-10" />
        <div class="w-full h-full grid grid-cols-2 gap-8 sm:flex sm:flex-col sm:gap-0">
            <div class="mx-2">
                <p class=" text-sm font-thin  text-white mb-8">BOOKING</p>
                <ToggleTitle heading="How do I get information regarding a tattoo I want to get?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4">
                        You have to fill in the <a href="/#booking" class=" text-brand-green-2">booking form</a> and
                        submit all the details in there.
                        <br><br>
                        With this information I will be able to provide you an approximate price, possible suggestions
                        and eventually refuse the project in case it is not something for me.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="How do I book a session with you?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4 font-thin">
                        You have to submit the <a href="/#booking" class=" text-brand-green-2">booking form</a>. I will
                        answer within 2-5 weeks.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="How is the booking process?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4 font-thin">
                        First, I will answer your email (it will take 2-5 weeks).
                        <br><br>
                        It’s only me taking care of your emails since I have decided that I want this process to be very
                        personal. To me it is very important that we both feel comfortable and to find the best way to
                        improve your idea. But that also means it can take some time, since I also tattoo and prepare
                        designs on daily basis. Thank you always for your patience!
                        <br><br>
                        The project can be rejected if it’s not my style, I think it will not be good as a tattoo or for
                        some other reasons, I think maybe another tattooer will be a better fit.
                        <br><br>
                        If the idea/style fits, I will give you an approximate price, and usually some suggestions,
                        attaching some pictures to explain what I think could be different or improved. I kindly ask
                        that, if you are not interested in it for any reason, you still write me back saying so. I truly
                        appreciate that!
                        <br><br>
                        Once we agree on the idea, we will look for a date and time. We will find one that works for
                        both of us and I will book it in the calendar.
                        <br><br>
                        You will then receive a text with instructions to approve terms and conditions from the Danish
                        Health Department, and also a new email from me asking to pay a booking fee (1.000 DKK per
                        session) – MobilePay (for Danish phone numbers) or bank transfer. Once the payment is done, the
                        date is officially confirmed. In that email you will receive more specific information regarding
                        our appointment. Some details will be decided on the day of the appointment such as final size,
                        exact placement and some parts of the final design.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="When can I see the design?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4 font-thin">
                        We will look at the design together on the day of your appointment.
                        <br><br>
                        On the day we will still be able to do changes and additions, and decide the best placement and
                        size.
                        <br><br>
                        During the booking process via email, I always make sure to have all the details I need, so
                        usually no modification or very little is required on the day.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading=" Do you take in all booking requests?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4 font-thin">
                        I answer all the emails, but the project can be rejected if it’s not my style, I think it will
                        not be good as a tattoo, or if I think another tattooer will be a better fit.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Is there something you don't do?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4 font-thin">
                        In general, I only take in tattoos in my style – color realism, similar to what I post on my
                        Instagram feed or you can see in my gallery (recent, not more than 2-3 years old)
                        <br><br>
                        I also don’t do cover ups (unless it’s really small and faded so the design will not be
                        compromised), and I do not continue on someone else’s works – incorporate existing tattoos.
                        <br><br>
                        I also prioritise bigger projects.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Can I get a tattoo if I am under 18?" v-model="isActive">
                    <p class="text-sm text-brand-grey-4 font-thin">
                        No, in any case.
                    </p>
                </ToggleTitle>


                <p class="text-sm text-white font-thin my-8">PAYMENT</p>
                <ToggleTitle heading="How much does a tattoo cost with you?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">
                        In order to be able to give a price you have to submit the booking form, so I have all the information I need to give an approximate price. I usually give an estimation as on the day it can be bigger or take longer for some reason (like making some changes in the design).
                        <br><br>
                        The price is not charged as an hourly rate but per project (if small) or per sessions (if larger)
                        <br><br>
                        As a reference a day session costs 8.000 DKK, half session 4.500 DKK.
                        <br><br>
                        When booking one of my designs for a large piece (more than 4 sessions and with freedom in the design), the price is 7.000DKK per session – all sessions must be booked at once and providing the corresponding booking fee.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Do I have to pay a deposit?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8"> 
                        I always ask for a booking fee of 1.000 DKK per session. Payment via MobilePay (for Danish phone numbers) or bank transfer. It will be deducted from the final price. Without the booking fee the appointment is not saved and will be removed after a while. This fee is not refundable but I offer to move the appointment once without losing it (if said at least 3 days before).
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Sickness / cancellation - can I get my booking fee back?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8"> 
                        As a rule, you can’t get your reservation fee back.
                        <br><br>
                        But if you need to move your appointment to the next available time, contact in good advance (at least three business days) in order to move the booking fee to the new dates scheduled.
                        <br><br>
                        This can be done once, but on the second time of need of reschedule, a new booking fee will need to be paid again.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Which means of payment do you accept?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8"> 
                        You can pay with MobilePay, bank transfer or cash (with card only if the previous ones are not available for you).
                    </p>
                </ToggleTitle>
            </div>

            <div class="mx-2">
                <p class="text-sm text-white font-thin mb-8">BEFORE the session</p>

                <ToggleTitle heading="What should I do before my appointment?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">BEFORE the session
                    Make sure you get a good night’s sleep and eat a good breakfast before your time. It is exhausting for the body to get a new tattoo.
                        <br><br>
                        Take a shower beforehand and get in clean clothes. We ensure good hygiene and you are welcome to do so.
                        <br><br>
                        Make sure not to have the area you are gonna get tattooed damaged by the sun (sunburned or tanned).
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="What should I bring with me on the day of my appointment?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">
                        Feel free to bring sweets, sodas and possibly a packed lunch. We have a fridge you are welcome to borrow.
                        <br><br>
                        A good idea is to bring a charger and headset for your phone/tablet.
                        <br><br>
                        Loose and practical clothing is optimal over a new tattoo. Take e.g. shorts with if you need to be tattooed on the leg, or dresses / sweaters that can be easily opened / pushed to the side.
                        <br><br>
                        Remember to bring original reference pictures, if this is relevant for your time.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Which are the risks of getting a tattoo?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">
                        Infections and allergic reactions are rare but may occur. It is individually based.
                        <br><br>
                        If you are already allergic, there is a potential small risk, but allergy to the colours is very rare. If you have allergies, consult your doctor for a test that will give you maximum safety. This is always at your own risk, we aware you will have to approve terms from the Danish Health Department.
                        <br><br>
                        Please, check the information provided by the Danish Health Department regarding getting a new tattoo <a href="https://www.sik.dk/sites/default/files/2021-08/stps_tattoo_a4_uk_v2_2021.pdf" class=" text-brand-green-2">here</a> .
                    </p>
                </ToggleTitle>

                <p class="text-sm text-white font-thin my-8">DURING the session</p>
                <ToggleTitle heading="Do we take any breaks?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">
                        We take small breaks every 1-2 hours, of around 10 minutes.
                        <br><br>
                        At around 12-14 we will have a longer lunch break (20-30min). If you don’t have any lunch with you, you can easily get something nearby (café or supermarket – Irma). You are welcome to eat in the reception.
                        <br><br>
                        But any time you feel the need of a break, we will stop.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="How long is a day session?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">
                        For large designs, I set aside an entire day just for your appointment. Usually from 09:00 to 16:00, including breaks and preparation. Sometimes it takes a long time, for which might be charged additional money.
                    </p>
                </ToggleTitle>

                <p class="text-sm text-white font-thin my-8">AFTER the session</p>
                <ToggleTitle heading="How do I take care of my tattoo?" v-model="isActive">
                    <p class="text-sm text-white font-thin mb-8">
                        Go to <a href="/#aftercare" class=" text-brand-green-2">AFTERCARE</a> in order to follow the instructions to take care of your new tattoo..
                        <br><br>
                        It is very important that you make sure to follow this instructions, and go to the doctor if you develop a high fever / general feeling of illness in the body or you think you might have an infection. Please, check <a href="https://www.sik.dk/sites/default/files/2021-08/stps_tattoo_a4_uk_v2_2021.pdf" class=" text-brand-green-2">this information</a>  provided by the Danish Health Department to get more information regarding what to do after you get your tattoo or if you are unsure if you need to visit your doctor.
                    </p>
                </ToggleTitle>
                <ToggleTitle heading="Can I get a retouch?" v-model="isActive">
                    <p class="text-sm text-white font-thin">
                        Your tattoo should only be recoloured if necessary, so you have to send a picture via email if you think your tattoo needs a redrawing. You can get a retouch for free in the following 3 months after your appointment, but only if the instructions given after finishing have been complied and if strictly necessary.
                        <br><br>
                        Otherwise the retouch will be charged of a minimum of 500 DKK, or more depending of how much time is needed.
                    </p>
                </ToggleTitle>
            </div>
            <div> 
            </div>
        </div>
    </div>
</template>

<script>
import HeadingText from "../Shared/HeadingText.vue";
import ToggleTitle from "../Shared/ToggleTitle.vue"
export default {
    name: "TheFaq",
    components: {
        HeadingText,
        ToggleTitle
    },
    data() {
        return {
            isActive: false
        }
    }
};
</script>

<style scoped>

</style>
