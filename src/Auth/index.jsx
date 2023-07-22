import React from 'react';

const index = () => {
  return (
    <section class=" h-full">
      <div class=" h-[100vh] p-10">
        <div className='flex justify-center'>
          <div
            class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 ">
            <div class="w-[100%]">
              <div
                class="block rounded-lg bg-white shadow-lg ">
                <div class="g-0 lg:flex lg:flex-wrap">

                  <div class="px-4 md:px-0 lg:w-6/12">
                    <div class="md:mx-6 md:p-12">

                      <div class="flex justify-center">
                        <div className=' rounded-full' style={{
                              background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                            }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="44.5" height="44.5" viewBox="0 0 44.5 44.5">
                            <path id="logo-protools-svgrepo-com" d="M58.25,80.5A22.25,22.25,0,1,1,80.5,58.25,22.25,22.25,0,0,1,58.25,80.5Zm-.121-33.672c6.553,0,8.806,4.388,10.641,7.543,2.611,4.489,2.885,7.535,8.68,9.884a19.106,19.106,0,0,0,.632-6.125,19.952,19.952,0,1,0-39.9,0c0,2.808-.388,3.287.616,6.125,5.068-1.666,7.439-7.06,8.385-9.467,1.336-3.4,4.4-7.959,10.951-7.959Zm.121,5.953c-4.142,0-7.539,7.744-8.448,9.6s-4.011,6.154-8.3,7.232a19.957,19.957,0,0,0,33.157.134c-3.587-2.607-5.476-3.7-8.109-7.365-2.175-3.024-4.161-9.6-8.3-9.6Z" transform="translate(-36 -36)" fill="#fff" fill-rule="evenodd" />
                          </svg>

                        </div>

                      </div>

                      <form>
                        <p class="mb-4">Please login to your account</p>

                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Username" />
                          <label
                            for="exampleFormControlInput1"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                          >Username
                          </label>
                        </div>


                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password" />
                          <label
                            for="exampleFormControlInput11"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                          >Password
                          </label>
                        </div>

                        <div class="mb-12 pb-1 pt-1 text-center">
                          <button
                            class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                              background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                            }}>
                            Log in
                          </button>


                          <a href="#!">Forgot password?</a>
                        </div>

                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 "
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>


                  <div
                    class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                    <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 class="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p class="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;