# Optional YOLO weights

The default demo uses actual HSV image segmentation and a centroid tracker, so no weights or GPU are required.

For YOLO, install `backend/requirements-yolo.txt`, place a trusted Ultralytics-compatible `.pt` model here, then select YOLO on Computer Vision and enter `models/detector.pt`.

Weights are not included or automatically downloaded. Generic COCO weights do not contain `red_cube`, `blue_cube`, `green_cube`, or `target_zone` classes. Train a model with those class labels, or edit task targets to labels your model supports. Do not load untrusted pickle-based model weights. Review your chosen model and Ultralytics license before distribution or commercial use.

Prediction adapter follows the official Python API:
https://docs.ultralytics.com/modes/predict/
