SELECT d.department_name, count(e.employee_id)  FROM departments d
inner JOIN employees e
on d.department_id = e.department_id
group by d.department_name
order by count(e.employee_id) DESC
FETCH FIRST 2 ROWS ONLY;


select * from departments;
update departments
set department_name = 'Accounting'
where departments.department_id = 8;
