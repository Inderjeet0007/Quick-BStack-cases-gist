describe("Camera Injection", () => {
  it("inject image in an iOS app", async () => {
    var takePhotoButton = await $(`[name="Take Photo"]`);
    await takePhotoButton.click();

    var cameraButton = await $("~PhotoCapture");
    await cameraButton.click();

    var usePhotoButton = await $(`[name="Use Photo"]`);
    await usePhotoButton.click();
  });
});
