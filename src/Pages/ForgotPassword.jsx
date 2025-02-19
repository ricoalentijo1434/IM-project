
function ForgotPassword() {

    function click() {
        alert("We've sent a Form in your gmail")
    }
    
    return(

        <div class="flex items-center justify-center min-h-screen bg-[#FBFBFB] bg-gradient-to-br from-[#E8F9FF] to-[#C4D9FF]">
            <div class="bg-white p-8 rounded-2xl shadow-2xl w-150 border border-gray-200">
                <h2 class="text-3xl font-bold text-[#1E152A] text-center mb-6">Forgot password</h2>
                <form action="#" method="POST"> 
                    <div class="mb-4">
                        <label class="block text-gray-600 text-sm font-semibold mb-2" for="email">Email</label>
                        <input type="email" id="email" name="email" required class="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C4D9FF] focus:outline-none transition"/>
                    </div>
                    <a  href="registration.html"></a><button id="forgot" onClick={click} type="submit" class="w-full bg-gradient-to-r from-[#C5BAFF] to-[#C4D9FF] text-white py-2 rounded-lg hover:shadow-lg transition transform hover:scale-105 mt-3">Update</button>
                </form>
                
            </div>
        </div>
    );
}


export default ForgotPassword