export function triggerDownload(fileUrl, fileName) {
    const toast = document.getElementById("resumeToast");
    toast.className = "toast show";
    
    setTimeout(() => { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);

    const link = document.createElement('a');
    link.href = fileUrl; 
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}