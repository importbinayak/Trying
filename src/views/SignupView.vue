<template>
    <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
        <div class="main-left">
            <div class="p-12 bg-white border border-gray-200 rounded-lg">
                <h1 class="mb-6 text-2xl">Log in</h1>
                <p class="mb-6 text-gray-500">
                    hello everybody this is login page of my site
                    You can also create account by clicking on button below
                </p>

                <p class="font-bold">
                    Already have an account? <RouterLink :to="{'name':'login'}" class="underline">Click here</RouterLink> to Login !!
                </p>
            </div>
        </div>

        <div class="main-right">
            <div class="p-12 bg-white border border-gray-200 rounded-lg">
                <form class="space-y-6">
                            <div>
                                <label>Name</label><br>
                                <input type="text" placeholder="Your Full Nme" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                            </div>
                            <div>
                                <label>E-mail</label><br>
                                <input type="email" placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                            </div>

                            <div>
                                <label>Password</label><br>
                                <input type="password" placeholder="Your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                            </div>

                            <div>
                                <label>Confirm Password</label><br>
                                <input type="password" placeholder="Confirm Your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                            </div>

                            <div>
                                <button class="py-4 px-6 bg-purple-600 text-white rounded-lg">Signup</button>
                            </div>
                        </form>
            </div>
        </div>
    </div>
</template>