import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());

    // อัปเดต val ก่อน
    act(() => {
      result.current.setVal(5);
    });

    // ค่อยเรียก increment หลังจาก val เปลี่ยนแล้ว
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5); // count ควรเพิ่มขึ้นเป็น 5
  });
});