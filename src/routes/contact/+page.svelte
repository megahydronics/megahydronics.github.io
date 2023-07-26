<script>
    import Page from '$lib/Page.svelte';

    let formHeight;
    let formWidth;
    let mapHeight;
    $: mapHeight = Math.min(formWidth, formHeight);
</script>

<Page pageId="contact">
    <div class="px-6 py-12 md:py-20 lg:px-8">
        <div class="mx-auto max-w-xl lg:max-w-5xl">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">Get in touch anytime</h2>
            <div class="mt-12 lg:items-start flex flex-col gap-10 lg:flex-row">
                <form
                    action="#"
                    method="POST"
                    class="lg:flex-auto"
                    bind:clientWidth={formWidth}
                    bind:clientHeight={formHeight}
                >
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label
                                for="first-name"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >First name</label
                            >
                            <div class="mt-2.5">
                                <input
                                    required
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="last-name"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Last name</label
                            >
                            <div class="mt-2.5">
                                <input
                                    required
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="budget"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Email</label
                            >
                            <div class="mt-2.5">
                                <input
                                    required
                                    id="budget"
                                    name="budget"
                                    type="email"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="message"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                                >Message</label
                            >
                            <div class="mt-2.5">
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block min-h-[112px] max-h-[226px] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-scroll scrollbar scrollbar-thumb-transparent scrollbar-track-transparent scrollbar-corner-transparent"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <button
                            type="submit"
                            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Send message</button
                        >
                    </div>
                </form>
                <div class="lg:flex-auto rounded-md overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52505.55420065067!2d-122.99336475014613!3d49.24597201869356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486772683b65319%3A0x96ec2592de966693!2sMegaHydronics%20Inc!5e0!3m2!1sen!2sca!4v1690264378012!5m2!1sen!2sca"
                        width="100%"
                        height="{mapHeight}px"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Interactive map: Location of MegaHydronics Inc."
                    />
                </div>
            </div>
        </div>
    </div>
</Page>
