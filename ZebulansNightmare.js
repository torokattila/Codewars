/*Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. 
In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

zebulansNightmare('camel_case') == 'camelCase'
zebulansNightmare('zebulans_nightmare') == 'zebulansNightmare'
zebulansNightmare('get_string') == 'getString'
zebulansNightmare('convert_to_uppercase') == 'convertToUppercase'
zebulansNightmare('main') == 'main'*/

function zebulansNightmare(functionName) {
	if (!functionName.includes("_")) return functionName;

	return functionName
		.split("_")
		.map((words, index) => {
            if (index >= 1) {
                words = `${words.charAt(0).toUpperCase() + words.substring(1)}`;
            }

			return words;
		})
		.join("");
}

console.log(zebulansNightmare("camel_case"));
