describe("Camera Injection", () => {
  it("inject image in an Android app", async () => {
    var startCameraButton = await $(`id=com.bsstag.cameraimage:id/button`);
    await startCameraButton.click();

    var cameraButton = await $(
      `android=new UiSelector().text("Shutter").className("GLButton")`
    );
    await cameraButton.click();

    var okayButton = await $(`id=com.sec.android.app.camera:id/okay`);
    await okayButton.click();
  });
});
