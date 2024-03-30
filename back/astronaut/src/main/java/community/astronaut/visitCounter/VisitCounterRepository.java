package community.astronaut.visitCounter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitCounterRepository extends JpaRepository<VisitCounter, Long> {
}
