/*Build a function that will take an array of filenames (as string) and return an array of array. 
Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]] 

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/

function imageFilter(arr) {
  const result = [];
  const allowedFiles = /\.(jpg|png|gif|bmp|tiff|svg)$/i;

  arr.forEach((file) => {
    if (!allowedFiles.test(file)) {
      result.push(null);
    } else {
      const cuttedFile = file.split('.');

      if (!cuttedFile[0].length) {
        result.push(null);
      } else {
        result.push([file, cuttedFile[0], cuttedFile[1]]);
      }
    }
  });

  return result;
}

console.log(imageFilter(['favicon.gif', 'img.tiff']));
console.log(imageFilter(['index.html', 'seattle.jpg']));
console.log(imageFilter(['.bash_profile', 'workspace.doc', 'img0912.jpg']));
console.log(imageFilter(['jpg.txt', 'logo.svgg', '.tiff']));
