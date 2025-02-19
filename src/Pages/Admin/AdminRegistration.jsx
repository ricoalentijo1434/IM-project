function AdminRegistration() {
    return(
        <div class="flex items-center justify-center min-h-screen bg-[#FBFBFB] bg-gradient-to-br from-[#E8F9FF] to-[#C4D9FF]">
            <div class="bg-white p-8 rounded-2xl shadow-2xl w-150 border border-gray-200">
                <h2 class="text-3xl font-bold text-[#1E152A] text-center mb-6">Admin Create Account</h2>
                <form action="#" method="POST"> 
                    <div class="mb-4 flex gap-2">
                        <div class="flex-1">
                            <label class="block text-gray-600 text-sm font-semibold mb-2" for="firstname">First Name</label>
                            <input placeholder="ex. Juan" type="text" id="firstname" name="firstname" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                        </div>
                        <div class="flex-1">
                            <label class="block text-gray-600 text-sm font-semibold mb-2" for="lastname">Last Name</label>
                            <input placeholder="ex. Dela Cruz" type="text" id="lastname" name="lastname" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                        </div>
                    </div>
                    <div class="mb-4 flex space-x-4">
                        <div class="w-1/2">
                            <label  class="block text-gray-600 text-sm font-semibold mb-2" for="username">Username</label>
                            <input placeholder="ex. Juan123" type="text" id="username" name="username" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                        </div>
                        <div class="w-1/2">
                            <label class="block text-gray-600 text-sm font-semibold mb-2" for="password">Password</label>
                            <input placeholder="Password" type="password" id="password" name="password" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                        </div>
                    </div>
                    
                    <div class="mb-4 flex space-x-4">
                        <div class="w-1/2">
                            <label class="block text-gray-600 text-sm font-semibold mb-2" for="dob">Date of Birth</label>
                            <input type="date" id="dob" name="dob" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                        </div>
                        <div class="w-1/2">
                            <label class="block text-gray-600 text-sm font-semibold mb-2" for="dob">Gender</label>
                            <select class="appearance-none w-full px-4 py-[10px] bg-gray-100 text-gray-900 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition border border-gray-300 rounded-lg">
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>      
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-600 text-sm font-semibold mb-2" for="primaryEmail">Address</label>
                        <input placeholder="ex. 10 Downing St, London SW1A 2AA, UK" type="text" id="addreess" name="addreess" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-600 text-sm font-semibold mb-2" for="primaryEmail">Primary Email</label>
                        <input placeholder= "Juandelacruz@gmail.com" type="email" id="primaryEmail" name="primaryEmail" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-600 text-sm font-semibold mb-2" for="secondaryEmail">Secondary Email</label>
                        <input placeholder= "Juandelacruz@gmail.com" type="email" id="secondaryEmail" name="secondaryEmail" class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                    </div>
                    <button type="submit" class="w-full bg-gradient-to-r from-[#C5BAFF] to-[#C4D9FF] text-white py-2 rounded-lg hover:shadow-lg transition transform hover:scale-105">Register</button>
                </form>
                <p class="text-gray-600 text-sm text-center mt-4">Already have an account? <a href="#" class="text-[#C5BAFF] font-semibold hover:underline" id="login-js">Login</a></p>
            </div>
        </div>

    );
}

export default AdminRegistration;
