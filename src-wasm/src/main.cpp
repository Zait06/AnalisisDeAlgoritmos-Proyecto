#include "PSO/PSO.h"
#include <ctime>
#include <iostream>

int main() {
  srand(time(NULL));

  PSO pso(20, -5.0, 5.0, 2);
  pso.setLocalFactor(float(1.49445));
  pso.setGlobalFactor(float(1.49445));

  pso.train(100);

  Particle pp = pso.getBestGlobalParticle();

  std::cout << pp.getPosition().transpose() << std::endl;
  std::cout << pp.getBestScore() << std::endl;

  return 0;
}
