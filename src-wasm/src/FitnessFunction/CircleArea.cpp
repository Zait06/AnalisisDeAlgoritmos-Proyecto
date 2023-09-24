#include "CircleArea.h"
#include <cmath>

CircleArea::CircleArea() {}

float CircleArea::compute(VectorType x) const {
    if (x.size() != 4) return 0.0;
    double x0 = x[0];
    double y0 = x[1];
    double x1 = x[2];
    double y1 = x[3];
    double radio = pow(x1 - x0, 2) + pow(y1 - y0, 2);
    radio = sqrt(radio);
    return M_PI * pow(radio, 2);
}
